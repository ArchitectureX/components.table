import path from 'path'

import { loadUserConfig, mergeConfig } from '@architecturex/devtools'
import defaultConfig, { Configuration } from './defaultConfig'

const configPath = process.cwd() + '/.architecturexrc.json'
const userConfigPath = path.resolve(configPath)
const userConfig = loadUserConfig(userConfigPath)
const finalConfig = mergeConfig(defaultConfig, userConfig)

export default finalConfig as Configuration
