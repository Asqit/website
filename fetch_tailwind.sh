# -------------------------------------------
#  fetch_tailwind.sh                v1
#  Ondřej Tuček              12.6.2023
# -------------------------------------------
#  A simple unix shell script for fetching
#  lastest copy of tailwindcss-cli
# -------------------------------------------
#!/usr/bin/sh


proc_info=uname
proc_cpu_arch=$"uname -m"


# Yes, I acknoledge, that this nested if statemet is ugly. 
# And I guess, that sh supports string interpolation.
# But this is as far as my shell scripting goes without internet.
if [[ $proc_info -eq "Linux" ]]
then
  if [[ $proc_cpu_arch -eq "x86_64" ]]
  then
    echo "Fetching tailwind for: Linux with x64"
    curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64
    chmod +x tailwindcss-linux-x64
    mv tailwindcss-linux-x64 tailwindcss
  else
    echo "Fetching tailwind for: Linux with arm"
    curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64
    chmod +x tailwindcss-linux-arm64
    mv tailwindcss-linux-arm64 tailwindcss
  fi
elif [[ $proc_info -eq "Darwin" ]]
then
  if [[ $proc_cpu_arch -eq "x86_64" ]]
  then
    echo "Fetching tailwind for: Mac with x64"
    curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-x64
    chmod +x tailwindcss-macos-x64
    mv tailwindcss-macos-x64 tailwindcss
  else
    echo "Fetching tailwind for: Mac with arm"
    curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
    chmod +x tailwindcss-macos-arm64
    mv tailwindcss-macos-arm64 tailwindcss
  fi
else
  echo "BSD or other..."
  echo "You have to download the copy on your own :("
fi