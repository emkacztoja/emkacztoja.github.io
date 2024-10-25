#!/bin/bash

# This script deletes trash files from common directories on Ubuntu

echo "Starting cleanup..."

# Define directories to clean
TRASH_DIRS=(
    "$HOME/Desktop"             # Desktop
    "$HOME/Downloads"           # Downloads
    "$HOME/.cache"              # User cache
    "/var/tmp"                  # System temp files
    "/tmp"                      # Temporary files
)

# Remove specific unwanted file types from these directories
FILE_TYPES=("*.tmp" "*.log" "*.bak" "*.old" "*.swp" "*.DS_Store" "*.crdownload")

# Function to clean directories
clean_directory() {
    local dir=$1
    if [ -d "$dir" ]; then
        echo "Cleaning $dir..."
        # Loop through file types and delete matching files
        for type in "${FILE_TYPES[@]}"; do
            find "$dir" -type f -name "$type" -exec rm -f {} \;
        done
    else
        echo "$dir does not exist or is not a directory."
    fi
}

# Empty Trash
echo "Emptying trash..."
rm -rf "$HOME/.local/share/Trash/files/*" 2>/dev/null
rm -rf "$HOME/.local/share/Trash/info/*" 2>/dev/null

# Clean each directory
for dir in "${TRASH_DIRS[@]}"; do
    clean_directory "$dir"
done

# Clean up browser caches if Firefox and Chrome are installed
if [ -d "$HOME/.mozilla/firefox" ]; then
    echo "Clearing Firefox cache..."
    rm -rf "$HOME/.mozilla/firefox/*/cache2/*" 2>/dev/null
fi

if [ -d "$HOME/.cache/google-chrome" ]; then
    echo "Clearing Chrome cache..."
    rm -rf "$HOME/.cache/google-chrome/*" 2>/dev/null
fi

echo "Cleanup complete!"
