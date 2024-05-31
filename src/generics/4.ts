type UserProfile = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserProfile>) {
  // Оновлення користувача
  console.log(initialValues);
}

// Приклад використання:
createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
