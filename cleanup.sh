#!/bin/bash

# This script deletes everything from specified directories on Ubuntu and resets the wallpaper to the default.

echo "Starting full cleanup..."

# Define directories to fully clear
TRASH_DIRS=(
    "$HOME/Desktop"             # Desktop
    "$HOME/Downloads"           # Downloads
    "$HOME/.cache"              # User cache
    "/var/tmp"                  # System temp files
    "/tmp"                      # Temporary files
)

# Function to fully clean directories
clear_directory() {
    local dir=$1
    if [ -d "$dir" ]; then
        echo "Clearing all contents in $dir..."
        rm -rf "$dir"/* "$dir"/.[!.]* "$dir"/..?* 2>/dev/null
    else
        echo "$dir does not exist or is not a directory."
    fi
}

# Empty Trash
echo "Emptying trash..."
rm -rf "$HOME/.local/share/Trash/files/*" 2>/dev/null
rm -rf "$HOME/.local/share/Trash/info/*" 2>/dev/null

# Clear each directory
for dir in "${TRASH_DIRS[@]}"; do
    clear_directory "$dir"
done

# Clear browser caches if Firefox and Chrome are installed
if [ -d "$HOME/.mozilla/firefox" ]; then
    echo "Clearing Firefox cache..."
    rm -rf "$HOME/.mozilla/firefox/*/cache2/*" 2>/dev/null
fi

if [ -d "$HOME/.cache/google-chrome" ]; then
    echo "Clearing Chrome cache..."
    rm -rf "$HOME/.cache/google-chrome/*" 2>/dev/null
fi

# Set default wallpaper to Ubuntu's latest default (usually warty-final-ubuntu.png)
echo "Setting wallpaper to default..."
DEFAULT_WALLPAPER="/usr/share/backgrounds/warty-final-ubuntu.png"
if [ -f "$DEFAULT_WALLPAPER" ]; then
    gsettings set org.gnome.desktop.background picture-uri "file://$DEFAULT_WALLPAPER"
    gsettings set org.gnome.desktop.background picture-options "zoom"
    echo "Wallpaper set to default."
else
    echo "Default wallpaper file not found."
fi

echo "Full cleanup complete!"
