fx_version "bodacious"
game "gta5"

author 'Álison Gonçalves <github.com/Alisonlg>'
version '1.2024.3'

shared_scripts {
	'@es_extended/imports.lua',
    'config.lua'
}

client_scripts {
	'@es_extended/locale.lua',
    '@vrp/lib/utils.lua',
	'client-side/*'
}

server_scripts {
	'@es_extended/locale.lua',
	'@oxmysql/lib/MySQL.lua',
    '@vrp/lib/utils.lua',
	'server-side/*'
}

ui_page 'html/index.html'
files {
    'html/*'
}