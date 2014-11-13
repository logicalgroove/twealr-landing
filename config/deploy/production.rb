server 'twealr-landing-prod', roles: %w{web app db}
set :rails_env, 'production'
set :deploy_to, '/home/deploy/apps/twealr_landing'
require 'delayed/recipes'

set :ssh_options, {
  user: 'deploy',
  keys: %w(/home/pair/.ssh/id_rsa_lg),
  forward_agent: true,
  auth_methods: %w(publickey)
}

after 'deploy:publishing', 'deploy:restart'
namespace :deploy do
  task :restart do
    invoke 'delayed_job:restart'
  end
end
