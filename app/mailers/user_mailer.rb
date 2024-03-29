class UserMailer < ActionMailer::Base
    default from: "Twealr <info@twealr.com>"

    def signup_email(user)
        @user = user
        mail(:to => user.email, :subject => "Thanks for signing up!")
    end

    def he_signup_email(user)
        @user = user
        mail(:to => user.email, :subject => "Thanks for signing up!")
    end

    def grant_email(user)
      @user = user
      mail(to: user.email, subject: "You've earned 25 dollars!")
    end
end
