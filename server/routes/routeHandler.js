import { error } from './get/error.js'
import { home } from './get/home.js'
import { login } from './get/login.js'
import { logout } from './get/logout.js'
import { profile } from './get/profile.js'
import { register } from './get/register.js'
import { root } from './get/root.js'
import { registerUser } from './post/registerUser.js'
import { removeMatch } from './post/removeMatch.js'
import { updateProfile } from './post/updateProfile.js'
import { userMatches } from './post/userMatches.js'
import { userSettings } from './post/userSettings.js'

// GET
exports.root = (req, res) => root(req, res)
exports.login = (req, res) => login(req, res)
exports.logout = (req, res) => logout(req, res)
exports.register = (req, res) => register(req, res)
exports.home = (req, res) => home(req, res)
exports.profile = (req, res) => profile(req, res)
exports.error = (req, res) => error(req, res)

// POST
exports.registerUser = (req, res) => registerUser(req, res)
exports.userSettings = (req, res) => userSettings(req, res)
exports.userMatches = (req, res) => userMatches(req, res)
exports.removeMatch = (req, res) => removeMatch(req, res)
exports.updateProfile = (req, res) => updateProfile(req, res)
