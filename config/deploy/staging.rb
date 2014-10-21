server 'twealr.showsofa.com', user: 'dev', roles: %w{web app}
set :rails_env, 'production'

set :ssh_options, {
  keys: %w(/home/pair/.ssh/id_rsa_lg),
  forward_agent: true,
  auth_methods: %w(publickey)
}
