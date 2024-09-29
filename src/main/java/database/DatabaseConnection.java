package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

    // Variável para armazenar a única instância de conexão
    private static Connection connection = null;

    // Detalhes da conexão (ajuste conforme necessário)
    private static final String URL = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:orcl"; // URL específica para Oracle
    private static final String USER = "";
    private static final String PASSWORD = "";

    // Método público estático para obter a conexão
    public static Connection getConnection() {
        if (connection == null) {
            try {
                // Registrar o driver do banco de dados
                Class.forName("com.mysql.cj.jdbc.Driver"); // Para MySQL. Substitua se necessário.
                
                // Estabelecer a conexão
                connection = DriverManager.getConnection(URL, USER, PASSWORD);
                System.out.println("Conexão estabelecida com sucesso.");
            } catch (SQLException | ClassNotFoundException e) {
                e.printStackTrace();
                System.out.println("Falha ao conectar ao banco de dados.");
            }
        }
        return connection;
    }

    // Método para fechar a conexão quando necessário
    public static void closeConnection() {
        if (connection != null) {
            try {
                connection.close();
                System.out.println("Conexão fechada com sucesso.");
            } catch (SQLException e) {
                e.printStackTrace();
                System.out.println("Erro ao fechar a conexão.");
            }
        }
    }
}
