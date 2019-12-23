Feature: Teacher Grade Quizzes

  Scenario Outline: Quizzes need to be graded
    Given teacher <teacher-id> teach in class <class-id>
    And the teacher added new quiz with $<n-questions>
    And student $<student-id> is a student in class $<class-id>
    And student $<student-id> submited answers to this quiz
    And student $<student-id> answerd $<n-correct> correctly out of $<n-questions>
    When Teacher request to grade this quiz
    Then the result should be $<n-correct>

  # I assume that teacher assign quizes to classes not students
  Scenario Outline: Teacher can calculate each student's total grade accumulated over a semester for their classes
    Given teacher $<teacher-id> teach in class $<class-id>
    And the teacher added new quiz $<quiz-id> with $<n-questions> to class $<class-id>
    And added another quiz $<quiz2-id> with $<n2-questions>
    And student $<student-id> is a student in class $<class-id>
    And student $<student-id> submited $<n-correct> correct answers to this quiz $<quiz-id>
    And student $<student-id> submited $<n2-correct> correct answers to this quiz $<quiz2-id>
    When Teacher request to grade accumulated over a semester for student $<student-id>
    Then the result should be $<n-correct> + $<n2-correct>
