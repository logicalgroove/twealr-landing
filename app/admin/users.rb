ActiveAdmin.register User do
  actions :index, :show

  index do
    column :id
    column :email
    column :referral_code
    column :created_at
    column :expert
    column "Referrals", :users_count
    default_actions
  end

  show do
    attributes_table do
      row :id
      row :email
      row :referral_code
      row :referrer
      row :created_at
      row :updated_at
      row :expert
      row :referrals do
        user.referrals.blank? ? 'EMPTY' : user.referrals.map(&:email).join(', ')
      end
    end
  end
end
