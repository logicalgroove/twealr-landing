  # app/mailers/mail_preview.rb or lib/mail_preview.rb
  class MailPreview < MailView
    # Pull data from existing fixtures
    def signup_email
      UserMailer.signup_email(User.find(1))
    end

  end
