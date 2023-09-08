<?php 

    class user extends db {


        public function getUsers() {
            $sql = 'SELECT * FROM inputs;';
            $stmt = $this->connect()->query($sql);
                while ($row = $stmt->fetch()) {
                    echo $row['ID'] . ' ' . $row['Name'] . '<br>';
                }
        }

        public function getUsersStmt($name) {
            $sql = 'SELECT * FROM inputs WHERE ID = ?;';
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$name]);
            $names = $stmt->fetchAll();

            foreach ($names as $name) {
                echo $name['ID'] . ' ' . $name['Name'] . '<br>';
            }
        }

        public function insertuser($username, $number) {
            $sql = "INSERT INTO users ('name', 'contact_no') VALUES (?, ?)";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$username, $number]);
        }
    }

?>