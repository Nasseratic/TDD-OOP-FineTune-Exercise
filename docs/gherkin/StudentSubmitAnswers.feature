Feature: Student Submit Answers of Quiz

  Scenario Outline: Student can submit answers of quizzes
    Given Quiz $<quiz-id> is a quiz in class $<class-id>
    And student $<student-id> joined class $<class-id>
    When student submit answers of quiz $<quiz-id>
    Then All answers will be saved

  Scenario Outline: Student can submit some answers to quizzes (partial submission)
    Given Quiz $<quiz-id> is a quiz in class $<class-id>
    And Quiz $<quiz-id> contains $<n-questions>
    And student $<student-id> joined class $<class-id>
    When student submit $<m-answers> answers out of $<n-questions> answers where $<m> <= $<n>
    Then The m answers will be saved
    And Student $<student-id> can submit the quiz later