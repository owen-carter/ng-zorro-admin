@echo off
:: define path
set "nginxBin=C:\nginx-1.13.0\nginx.exe"
set "nginxPath=C:\nginx-1.13.0\html"
set "publishPath=.\dist\"

:deployFiles
@echo "start deployFiles"
cd %publishPath%
@echo "start deploy static files to nginx path..."
rm -rf %nginxPath%
cp -R "./" %nginxPath%
%nginxBin% -s quit
%nginxBin%
@echo "deploy end..."
GOTO:EOF


:initDependencies
@echo "start initDependencies"

GOTO:EOF


mode con cols=36 lines=20
color 2C
:menu
cls
echo ======================
echo menu
echo 1 ： deployFiles
echo 2 ： initDependencies
echo ======================

set /p userInput=请输入数字：
if %userInput% == "" call:deployFiles
if %userInput% equ 1 call:deployFiles
if %userInput% equ 2 call:initDependencies
pause
goto menu

