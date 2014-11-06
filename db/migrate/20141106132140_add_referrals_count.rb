class AddReferralsCount < ActiveRecord::Migration
  def up
    add_column :users, :users_count, :integer, :default => 0

    User.reset_column_information
    User.all.each do |u|
      User.reset_counters(u.id, :referrals)
    end
  end

  def down
    remove_column :users, :users_count
  end
end
