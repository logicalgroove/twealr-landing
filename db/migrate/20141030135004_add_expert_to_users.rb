class AddExpertToUsers < ActiveRecord::Migration
  def change
    add_column :users, :expert, :boolean, default: false
  end
end
