'use strict'

const Fs = require('fs')
const Path = require('path')

class ComponentRegister {
  constructor (path) {
    return this._registerAll(path)
  }

  _getComponentScriptPath (path, name) {
    return `${Path.join(path, name)}.js`
  }

  _isFolder (path) {
    const fileInfo = Fs.statSync(path)
    return fileInfo.isDirectory()
  }

  _registerSingle (folderPath, componentRoot) {
    const componentPath = Path.join(componentRoot, folderPath)
    if (!this._isFolder(componentPath)) {
      return
    }
    const { name } = Path.parse(componentPath)
    const jsFilePath = this._getComponentScriptPath(componentPath, name)

    if (Fs.existsSync(jsFilePath)) {
      return {
        name,
        path: jsFilePath
      }
    }
  }

  _registerAll (path) {
    const dirContents = Fs.readdirSync(path)
    let components = []
    if (!this._isFolder(path)) {
      throw new Error(`${path} is not a directory. Components cannot be loaded!`)
    }
    for (const file of dirContents) {
      const component = this._registerSingle(file, path)
      if (component) {
        components.push(component)
      }
    }
    return components
  }
}
const componentsPath = `${__dirname}/../components/`
export default new ComponentRegister(componentsPath)
