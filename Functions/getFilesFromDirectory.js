function getFilesFromDirectory(pathName, app) {
    return app.vault.getAllLoadedFiles().
        filter(i => i.path === "Projects")[0].
        children.
        map(children => children.basename);
}

module.exports = getFilesFromDirectory;
