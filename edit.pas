unit edit;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls;

type
  TForm2 = class(TForm)
    Edit1: TEdit;
    Label1: TLabel;
    Label2: TLabel;
    ComboBox1: TComboBox;
    Button1: TButton;
    Button2: TButton;
    procedure FormShow(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form2: TForm2;

implementation

{$R *.dfm}

uses main;

procedure TForm2.FormShow(Sender: TObject);
begin
AssignFile(sin_file,GetCurrentDir+'\Sinonims.dat');
Reset(sin_file);
 while not Eof(sin_file) do
    begin
      read(sin_file, sin_word);
      showmessage(inttostr(sin_word.parent));
      if sin_word.parent=0 then Combobox1.Items.Add(sin_word.txt);
      //if DummyMember.polz=s1 then y:=1;
    end;
CloseFile(sin_file);
end;

end.
