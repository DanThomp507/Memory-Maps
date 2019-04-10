class User < ApplicationRecord
  has_many :countries
  has_many :comments
  has_many :blogs
  has_secure_password
  validates_uniqueness_of :email
  validates :email, presence: true

  def to_token_payload
    {
      id: id,
      name: name,
      email: email,
      bio: bio,
      username: username,
    }
  end
end
