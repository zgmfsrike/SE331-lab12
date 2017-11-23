package camt.cbsd.lab05.dao;

import camt.cbsd.lab05.entity.Student;

import java.util.List;

public interface StudentDao {
    List<Student> getStudents();
    Student findById(long id);
    Student addStudent(Student student);
    Student findByUsername(String username);
    List<Student> getStudents(String searchText);
    public List<Student> findByNameIgnoreCaseContaining(String name);
    Integer size();
}
