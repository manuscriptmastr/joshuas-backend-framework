export class UserService {
  getUsers() {
    return [
      { name: "jonathan", books: "/users/jonathan/books" },
      { name: "joshua", books: "/users/joshua/books" },
    ];
  }

  getBooks(userId) {
    switch (userId) {
      case "jonathan":
        return [
          "Chronicles of Narnia",
          "Harry Potter",
          "Lord of the Rings",
          "Wheel of Time",
        ];
      case "joshua":
        return [
          "The Way of the Heart",
          "The Art of Biblical Narrative",
          "The Great Divorce",
        ];
      default:
        return [];
    }
  }
}
