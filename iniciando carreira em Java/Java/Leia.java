import java.util.Scanner;

public class Leia{
    public static void main(String[] args) {

        //SCANNER SERVE PARA INSERÇÃO DE DADOS PELO USUÁRIO

        Scanner s = new Scanner(System.in);

        System.out.println("Digite nome: ");
        String nome = s.nextLine();

        System.out.printf("Nome: %s",nome);

        s.close();

        
    }
}
