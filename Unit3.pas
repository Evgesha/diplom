unit Unit3;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls;

type
  TForm3 = class(TForm)
    Label1: TLabel;
    Label2: TLabel;
    Edit1: TEdit;
    Edit2: TEdit;
    Button1: TButton;
    procedure Button1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form3: TForm3;
  a:variant;



implementation

{$R *.dfm}

uses  main;

procedure TForm3.Button1Click(Sender: TObject);
var vl:integer;
    str:string;
begin
vl:=0;
  repeat
    try
    Form1.Delay(5000);
    a:=Form1.EmbeddedWB1.oleobject.document.getelementbyid('edit-name-2');
    a.value:=Edit1.Text;
    a:=Form1.EmbeddedWB1.oleobject.document.getelementbyid('edit-pass-2');
    a.value:=Edit2.Text;
    a:=Form1.EmbeddedWB1.oleobject.document.getelementbyid('edit-submit-10');
    a.click;
    vl:=1;
    finally
    Form1.Delay(5000);
    end;
  until vl=1;
Form1.Delay(5000);
Form1.MainMenu1.Items[2].Visible:=false;
Form1.MainMenu1.Items[3].Visible:=true;
Form1.Button7.Enabled:=true;

Form3.Close;
end;

end.
