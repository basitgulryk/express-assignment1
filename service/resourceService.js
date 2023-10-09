const Courses = [
  { id: 1, name: "urdu" },
  { id: 2, name: "Physics" },
  { id: 3, name: "Chemistry" },
];

module.exports = {
  getCourses: (data) => {
    return Courses;
  },
  updateCourse: (id, data) => {
    const course = Courses.find((c) => c.id === parseInt(id));
    if (!course) {
      return "The course with the given ID was not found."; //404
    } else {
      course.name = data.name;
      return course;
    }
  },
  deleteCourse: (id) => {
    const course = Courses.find((c) => c.id === parseInt(id));
    if (!course) {
      return "The course with the given ID was not found."; //404
    } else {
      const index = Courses.indexOf(course);
      Courses.splice(index, 1);
      return course;
    }
  },
  addCourse: (data) => {
    const course = {
      id: Courses.length + 1,
      name: data.name,
    };
    Courses.push(course);
    return course;
  },
};
