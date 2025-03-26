export function formatFileNameAsTitle(fileName: string) {
    return fileName
        .replace(/\.[^.]+$/, '') // Remove file extension
        .replace(/[_\-\.]+/g, ' ') // Replace underscores, hyphens, and dots with spaces
        .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize first letter of each word
}