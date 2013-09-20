/*
**@author: Martin Davila Marcos
**@version: 1.0
**DNI: 70891675V
** MIT Licenced
*/
public class Destruible : GameObject{
	private String SpiriteType;
	private int numChunk;
	private int life;
	private int i;
	public var cl : color;
	var Atacante : GameObject;
	public Destruible(String SpiType, int nC, String TexCh, int life){
		this.SpirteType=SpiType;
		this.numChunk=nCh;
		this.textureChunk=TexCh;
		this.life=life;
	}
	function Update(){
		private RecibirDaño(GameObject Atacante){
			var chunk : Rigidbody;
			var spirite: Particle;
			Atacante=GameObject.FindWithTag("Bala");
			OnCollisionEnter(Atacante,this){
				this.life-=Atacante.daño;
				if(this.life<=0){
						spirite=Istantiate(SpiriteType,this.position,this.rotation);
						spirite.color=cl;
						spirite.energy=20;
						spirite.size=numChunk*2;
					}
					OnDeltaTime(3){
					for(i=0;i<this.numChunk;i++){
						chunk=Intantiate(this.TypeChunk,this.position,this.rotation);//luego se selecciona la textura del chunk
						chunk.AddForce(this.forward*200);/**le añadimos fuerza para q resulte mas realista*/
						//NOTA: cambiar "forward" x otro parametro para q no resulte tan lineal
					}//y el tipo de chunk en la pestaña del editor
				}
				OnDeltaTime(6)
					Destroy(this);
			}
		}
	}
}
