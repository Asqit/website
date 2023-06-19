#!/usr/bin/bash
# Author: Ondřej Tuček
# Datum: 19.6.2023
# Popis: Script for fetching latest copy of tailwindcss-cli

function fetch_tailwind {
  echo "Initiating fetch...($1)"
  curl -vsLO "https://github.com/tailwindlabs/tailwindcss/releases/latest/download/$1"
  
  echo Making tailwind executable
  chmod +x $1

  echo Renaming to tailwindcss
  mv $1 tailwindcss
}

function main {
  local os_type=uname
  local cpu_arch="uname -m"

  if [[ $os_type -eq "Linux" ]]; then
    if [[ $cpu_arch -eq "x86_64" ]]; then
      fetch_tailwind "tailwindcss-linux-x64"
    else 
      fetch_tailwind "tailwindcss-linux-arm64"
    fi
  elif [[ $os_type -eq "Darwin" ]]; then
    if [[ $cpu_arch -eq "x86_64" ]]; then
      fetch_tailwind "tailwindcss-macos-x64"
    else
      fetch_tailwind "tailwindcss-macos-arm64"
    fi
  else
    echo BSD or other...
    echo Download the copy on your own.
  fi
}

main