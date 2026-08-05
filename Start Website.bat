@echo off
title Tayyab Ismail Portfolio - Dev Server
cd /d "%~dp0"
echo Starting the portfolio website...
start "" http://localhost:5173/
npm run dev
