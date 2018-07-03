10.times do 
  Contact.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.free_email,
    phone: Faker::PhoneNumber.phone_number,
    address: Faker::Address.full_address,
    avatar: Faker::Avatar.image,
  )
  end 

  puts "Ten Contacts have been created"
