# ReactNPM-Setup
Express React Typescript
```
git clone git@github.com:StrajnarFilip/ReactNPM-Setup.git
cd ReactNPM-Setup  
.\setup.ps1
```

In case you need to install Node + NPM, this also might be helpful:
# (ONLY WORKS IF YOU RUN AS ADMIN)
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1')) ; choco install git -y --acceptlicense ; choco install nodejs -y --acceptlicense
```
