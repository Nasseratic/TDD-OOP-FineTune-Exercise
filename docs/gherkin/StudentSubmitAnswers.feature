Feature: Student Submit Answers to Quiz

  Scenario Outline: Student can submit answers to quizes
    Given Quiz $<quiz-id> is a quiz in class $<class-id>
    And student $<student-id> joined class $<class-id>
    When student submit answers
    Then All answers will be saved

  Scenario Outline: Student can submit some answers to quizes (partially)
    Given Quiz $<quiz-id> is a quiz in class $<class-id>
    And Quiz $<quiz-id> contains $<n-questions>
    And student $<student-id> joined class $<class-id>
    When student submit $<n-answers> answers out of $<n-questions> answers
    Then The answers will be partially saved
    And Student $<student-id> can submit the rest later