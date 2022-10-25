package exception;

public class AlunoNotFoundException extends RuntimeException{

	public AlunoNotFoundException(Integer matricula) {
		super("Could not Found the Aluno with matricula " + matricula);
	}
	
}
