### LeetCode SQL

181. Employees Earning More Than Their Managers
      select a.Name as Employee
      from Employee as a,Employee as b
      wherea.ManagerId = b.Id and a.Salary > b.Salary;

182. Duplicate Emails
      select email 
      from person
      group by email
      having count(*)>1

595. Big Countries
      select name, population, area
      from world
      where area>=3000000 or population>=25000000
      
1757. Recyclable and Low Fat Products
      select product_id
      from products
      where low_fats like 'Y' and recyclable like 'Y'
      NOTE: we can use '=' insted of 'like'

584. Find Customer Referee
      select name
      from customer
      where referee_id !=2 or referee_id is null
      
183. Customers Who Never Order
      select name as customers
      from customers left join orders
      on customers.id = orders.customerId
      where orders.customerId is null

      OR

      select Name as Customers
      from Customers
      where Customers.Id not in (select CustomerId from Orders)
      
627. Swap Salary
      update Salary 
      set sex =if( sex='m','f','m');
      # we can not use select 
      
196. Delete Duplicate Emails
      delete table1
      from person as table1, person as table2
      where table1.email=table2.email and table1.id>table2.id
      # Write a DELETE statement and DO NOT write a SELECT statement
      
1667. Fix Names in a Table
      select user_id, concat(upper(left(name,1)),lower(substring(name,2))) as name
      from Users
      order by user_id

1484. Group Sold Products By The Date
      select sell_date, count(distinct product) as num_sold,
      group_concat(distinct product order by product asc) as products
      from Activities
      group by sell_date
      order by sell_date
      

