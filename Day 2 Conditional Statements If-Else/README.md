## Input and Output
### Objective
In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

#### Task

Complete the getGrade(score) function in the editor. It has one parameter: an integer,**score**, denoting the number of points Julia earned on an exam. It must return the letter corresponding to her **grade** according to the following rules:

If **25 < score <= 30**, then **grade = A**.</br>
If **20 < score <= 25**, then **grade = B**.</br>
If **15 < score <= 20**, then **grade = C**.</br>
If **10 < score <= 15**, then **grade = D**.</br>
If **5 < score <= 10**, then **grade = E**.</br>
If **0 < score <= 5**, then **grade = F**.
#### Input Format

Stub code in the editor reads a single integer denoting **score** from stdin and passes it to the function.

#### Constraints
* 0 <= score <=30
#### Output Format

The function must return the value of **grade** (i.e., the letter grade) that Julia earned on the exam.

#### Sample Input 0

    11
#### Sample Output 0

    D
#### Explanation 0

Because **score = 11**, it satisfies the condition **10 < score <= 15** (which corresponds to D). Thus, we return D as our answer.
