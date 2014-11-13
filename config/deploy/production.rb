server 'twealr-landing-prod', roles: %w{web app db}
set :rails_env, 'production'
set :deploy_to, '/home/deploy/apps/twealr_landing'

set :ssh_options, {
  user: 'deploy',
  keys: %w(/home/pair/.ssh/id_rsa_lg),
  forward_agent: true,
  auth_methods: %w(publickey)
}
