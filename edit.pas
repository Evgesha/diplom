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
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form2: TForm2;
  flag:integer;
  kol:integer;

implementation

{$R *.dfm}

uses main;

procedure TForm2.Button1Click(Sender: TObject);
var c,d:string;
begin
AssignFile(sin_file,'D:\Client_site\Sinonims.dat');
Reset(sin_file);
kol:=0;
 while not Eof(sin_file) do
    begin
      read(sin_file, sin_word);
      c:=AnsiLowerCase(sin_word.txt);
      if c=AnsiLowerCase(Combobox1.Text) then
      begin flag:=sin_word.id;
            d:=sin_word.txt;
      end;
      kol:=sin_word.id;
    end;
sin_word.id:=kol+1;
sin_word.parent:=flag;
sin_word.txt:=Edit1.Text;
Form1.ListBox1.Items[id_rubr]:=d;
write(sin_file,sin_word);
CloseFile(sin_file);
Form2.Close;
end;

procedure TForm2.Button2Click(Sender: TObject);
begin
Form2.Close;
end;

procedure TForm2.FormShow(Sender: TObject);
begin
AssignFile(sin_file,'D:\Client_site\Sinonims.dat');
Reset(sin_file);
 while not Eof(sin_file) do
    begin
      read(sin_file, sin_word);
      if sin_word.parent=0 then Combobox1.Items.Add(sin_word.txt);
    end;
CloseFile(sin_file);
end;

end.
