class AddReferralsCount < ActiveRecord::Migration
  def up
    add_column :users, :users_count, :integer, :default => 0

    User.reset_column_information
    User.all.each do |u|
      u.update_attribute :users_count, u.referrals.count
    end
  end

  def down
    remove_column :projects, :users_count
  end
end
