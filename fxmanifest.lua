fx_version "bodacious"
game "gta5"

author 'Álison Gonçalves <github.com/Alisonlg>'
version '1.0.0'

shared_scripts {
    'config.lua'
}

client_scripts {
    '@vrp/lib/utils.lua',
	'client-side/*'
}

server_scripts {
    "@vrp/lib/utils.lua",
	"server-side/*"
}

ui_page 'html/index.html'
files{
    'html/*'
}