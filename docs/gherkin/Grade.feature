Feature: Teacher Grade Quizzes

  Scenario Outline: Quizzes need to be graded
    Given teacher $<teacher-id> teaches in class $<class-id>
    And the teacher added new quiz with $<n-questions>
    And student $<student-id> is a student in class $<class-id>
    And student $<student-id> submitted answers to this quiz
    And student $<student-id> answerd $<m-questions> correctly out of $<n-questions> where $<m> <= $<n>
    When Teacher request to grade this quiz
    Then the result should be $<m-correct>

  # I assume that teacher assign quizzes to classes not to individual students
  Scenario Outline: Teacher can calculate each student's total grade accumulated over a semester for their classes
    Given teacher $<teacher-id> teach in class $<class-id>
    And the teacher added new quiz $<quiz-id> with $<n-questions> to class $<class-id>
    And added another quiz $<quiz2-id> with $<n2-questions>
    And student $<student-id> is a student in class $<class-id>
    And student $<student-id> submited $<x-correct> correct answers to this quiz $<quiz-id>
    And student $<student-id> submited $<y-correct> correct answers to this quiz $<quiz2-id>
    When Teacher request to grade accumulated over a semester for student $<student-id>
    Then the result should be $<x-correct> + $<y-correct>
