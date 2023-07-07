#!/bin/bash
# Author: Ondřej Tuček
# Date: 19.6.2023
# Description: Shell script, that prepares the development envinroment

function fetch_tailwind {
  echo "Initiating fetch...($1)"
  curl -sLO "https://github.com/tailwindlabs/tailwindcss/releases/latest/download/$1"
  
  echo "Making tailwind executable"
  chmod +x $1

  echo "Renaming to 'tailwindcss'"
  mv $1 tailwindcss
}

function evaluate_platform {
  local os_type=$(uname)
  local cpu_arch=$(uname -m)
  local target="tailwindcss"

  if [[ $os_type == "Linux" ]]; then 
    target+="-linux"
  elif [[ $os_type == "Darwin" ]]; then
    target+="-macos"
  else 
    echo "Unhandled platform..."
    echo "Sorry, but you have to obtain a copy on your own"
    exit 1
  fi

  if [[ $cpu_arch == "x86_64" ]]; then
    target+="-x64"
  else 
    target+="-arm64"
  fi

  echo "$target"
}

function fetch_deno {
    echo "Fetching deno install script"
    curl -fsSL https://deno.land/x/install/install.sh | sh

    deno_path='export DENO_INSTALL="/home/andrew/.deno"'
    final_path='export PATH="$DENO_INSTALL/bin:$PATH"'

    if [ $SHELL == "/usr/bin/zsh" ]; then
        echo "Updating path for zsh"
        echo $deno_path >> ~/.zshrc
        echo $final_path >> ~/.zshrc
    else
        echo "Updating path for bash"
        echo $deno_path >> ~/.bashrc
        echo $final_path >> ~/.bashrc
    fi
}


function main {
  if ! [ -x "$(command -v deno)" ]; then
    echo "Installing deno runtime"
    fetch_deno
  fi

  if [ ! -e "tailwindcss" ]; then 
    local target=$(evaluate_platform)
    fetch_tailwind "$target"
  else 
    exit 0
  fi
}

main