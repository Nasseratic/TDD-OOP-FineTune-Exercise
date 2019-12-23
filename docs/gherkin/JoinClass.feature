Feature: Join Class

  Scenario Outline: Students can join classes that Teachers teach
    Given Teacher $<teacher-id> created class $<class-id>
    When student $<student-id> request to join $<class-id>
    Then student $<student-id> is a student in class $<class-id>

  # I assume that teacher assign quizes to classes not studentsS
  Scenario Outline: Students can submit to Qizzes in joined classes
    Given Teacher $<teacher-id> created class $<class-id>
    And teacher added new quiz $<quiz-id> with $<n-questions> to class <class-id>
    When student $<student-id> join class $<class-id>
    Then student $<student-id> can view  quiz $<quiz-id>
    And student $<student-id> can submit answers to quiz $<quiz-id>