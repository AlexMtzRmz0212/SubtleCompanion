$ErrorActionPreference = 'SilentlyContinue'
$root = $PSScriptRoot
$port = 5173
$url = "http://localhost:$port/"
$title = '*Subtle Art Companion*'

Set-Location $root
if (-not (Test-Path 'node_modules')) { npm install }

Add-Type @'
using System;
using System.Runtime.InteropServices;
public class Win {
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int cmd);
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
}
'@

$running = Get-NetTCPConnection -LocalPort $port -State Listen

if (-not $running) {
  # Not running: start server hidden, wait for the port, open the browser
  Start-Process -FilePath 'cmd.exe' -ArgumentList '/c npm run dev' -WorkingDirectory $root -WindowStyle Hidden
  for ($i = 0; $i -lt 30; $i++) {
    if (Get-NetTCPConnection -LocalPort $port -State Listen) { break }
    Start-Sleep -Milliseconds 500
  }
  Start-Process $url
  exit
}

# Already running: find the browser tab showing the app (any window, any tab),
# select it, then maximize and focus its window (SW_MAXIMIZE = 3)
Add-Type -AssemblyName UIAutomationClient, UIAutomationTypes
$A = [System.Windows.Automation.AutomationElement]
$cond = New-Object System.Windows.Automation.PropertyCondition($A::ClassNameProperty, 'Chrome_WidgetWin_1')
$tabCond = New-Object System.Windows.Automation.PropertyCondition($A::ControlTypeProperty, [System.Windows.Automation.ControlType]::TabItem)

$found = $false
foreach ($w in $A::RootElement.FindAll([System.Windows.Automation.TreeScope]::Children, $cond)) {
  $tab = $w.FindAll([System.Windows.Automation.TreeScope]::Descendants, $tabCond) |
    Where-Object { $_.Current.Name -like $title } | Select-Object -First 1
  if ($tab) {
    $tab.GetCurrentPattern([System.Windows.Automation.SelectionItemPattern]::Pattern).Select()
    $h = [IntPtr]$w.Current.NativeWindowHandle
    [Win]::ShowWindow($h, 3) | Out-Null
    [Win]::SetForegroundWindow($h) | Out-Null
    $found = $true
    break
  }
}
if (-not $found) { Start-Process $url }
