server 'twealr.showsofa.com', roles: %w{web app db}
set :rails_env, 'production'

set :ssh_options, {
  user: 'dev',
  keys: %w(/home/pair/.ssh/id_rsa_lg),
  forward_agent: true,
  auth_methods: %w(publickey)
}

