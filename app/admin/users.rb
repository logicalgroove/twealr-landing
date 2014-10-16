ActiveAdmin.register User do
  actions :index, :show

  show do
    attributes_table do
      row :id
      row :email
      row :referral_code
      row :referrer
      row :created_at
      row :updated_at
      row :referrals do
        user.referrals.blank? ? 'EMPTY' : user.referrals.map(&:email).join(', ')
      end
    end
  end
end
