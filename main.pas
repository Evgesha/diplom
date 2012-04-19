unit main;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Data.DB, DBAccess, MyAccess, MemDS,
  Vcl.StdCtrls, Datasnap.DBClient, SimpleDS, Vcl.ComCtrls, ComObj, Vcl.Menus;

type
  TForm1 = class(TForm)
    MyConnection1: TMyConnection;
    Edit1: TEdit;
    Label1: TLabel;
    Memo1: TMemo;
    Label2: TLabel;
    Edit2: TEdit;
    Label3: TLabel;
    Button1: TButton;
    MyQuery1: TMyQuery;
    MyTable1: TMyTable;
    OpenDialog1: TOpenDialog;
    RichEdit1: TRichEdit;
    Button2: TButton;
    Button3: TButton;
    ListBox1: TListBox;
    Label4: TLabel;
    Memo2: TMemo;
    Button4: TButton;
    procedure Button1Click(Sender: TObject);
    procedure Button3Click(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure FormDestroy(Sender: TObject);
    procedure Button4Click(Sender: TObject);
    procedure ListBox1DblClick(Sender: TObject);
    //procedure Button1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

type
  TSinonims = record
    id  : integer;
    parent : integer;
    txt: string[50];
end;


var
  Form1: TForm1;
  sin_mas: array of TSinonims;
  sin_file: file of TSinonims;
  sin_word: TSinonims;
  str: string; //������� ������
  str_rub: string; //������ � ���������
  fl: integer; //���� ������ �� ����� ��������� ������
  i: integer; //������� ��� ������

implementation

{$R *.dfm}

uses edit;

{

������ �� ��������
st:=Copy(s,1,AnsiPos('#',s)-1);
Delete(s,1,AnsiPos('#',s));

//////

function DelDat(c:integer):integer;
begin

Reset(F);
 while not Eof(F) do
    begin
      read(F, DummyMember);
      Members[FilePos(F)-1]:=DummyMember;
      j:=FilePos(F);
    end;

Rewrite(F);     //������� �����, ������� ��������� ��
                //������ ������� ���������� �����

for i:=0 to j-1 do
  begin
  if i=x then continue
   else
   begin
   Write(F, Members[i]);
   end;
  end;

end;

//////////

y:=0;  //�������� �� �����
AssignFile(F,s+'\psw.dat');
Reset(F);
 while not Eof(F) do
    begin
      read(F, DummyMember);
      if DummyMember.polz=s1 then y:=1;
    end;
CloseFile(F);

//////////////

if (y=0) then      //�������� � ����
   begin
    ComboBox1.Items.Add(s1);
    DummyMember.polz:=s1;
    DummyMember.sumxor:='';
    AssignFile(F,s+'\psw.dat');
    Reset(F);
    Seek(F,FileSize(F));
    write(F, DummyMember);
    CloseFile(F);
   end;

/////////////

AssignFile(F,s+'\psw.dat');
DelDat(x);
CloseFile(F);

unction DelDat(c:integer):integer;
begin

Reset(F);
 while not Eof(F) do
    begin
      read(F, DummyMember);
      Members[FilePos(F)-1]:=DummyMember;
      j:=FilePos(F);
    end;

Rewrite(F);     //������� �����, ������� ��������� ��
                //������ ������� ���������� �����

for i:=0 to j-1 do
  begin
  if i=x then continue
   else
   begin
   Write(F, Members[i]);
   end;
  end;

end;


//////////////////////

procedure TForm1.FormShow(Sender: TObject);
var ss:string;
flag:boolean;
begin
AssignFile(F,s+'\psw.dat');
  flag:=true;
  Reset(F);
  while not Eof(F) do
      begin
      read(F, DummyMember);
      ADOQuery1.SQL.Clear;
      ADOQuery1.SQL.Add('select Polzovatel from Groups');
      ADOQuery1.SQL.Add('where Polzovatel="'+DummyMember.polz+'";');
      ADOQuery1.Open;
      if ADOQuery1.RecordCount=1 then
         begin
         ComboBox1.Items.Add(DummyMember.polz);
         end
         else
         begin
         Deldat(FilePos(F)-1);
         Reset(F);
         end;
      end;

ADOQuery1.SQL.Clear;
ADOQuery1.SQL.Add('select Polzovatel from Groups;');
ADOQuery1.Open;
AssignFile(F,s+'\psw.dat');
Reset(F);
for i:=0 to ADOQuery1.RecordCount-1 do
  begin
   ss:=ADOQuery1.FieldByName('Polzovatel').value;
   Reset(F);
   j:=0;
   while not Eof(F) do
      begin
      read(F, DummyMember);
      if ss=DummyMember.polz then begin j:=1; break; end;
      end;
   if j=0 then begin
               ComboBox1.Items.Add(ss);
               seek(F, FileSize(F));
               DummyMember.polz:=ss;
               DummyMember.sumxor:='';
               write(F,DummyMember);
               end;
   ADOQuery1.Next;
   end;
CloseFile(F);
end;

//////////////

���� �� ������
procedure TForm2.Edit1KeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
if ord(key)=13 then Button1.Click;
end;


}

procedure TForm1.Button1Click(Sender: TObject);
begin
//��������, � �����, ������
//�������� � ����

{sin_word.id:=12;
sin_word.parent:=9;
sin_word.txt:='������';

AssignFile(sin_file,GetCurrentDir+'\Sinonims.dat');
Reset(sin_file);
Seek(sin_file,FileSize(sin_file));  //������� �� ����� �����
write(sin_file, sin_word);
CloseFile(sin_file);
}


end;

procedure TForm1.Button3Click(Sender: TObject);
var COM_Word: olevariant;
begin
  try
    if OpenDialog1.Execute then
    begin
    Caption := ExtractFileName(OpenDialog1.FileName);
    COM_Word := CreateOLEObject('Word.Application');
    COM_Word.Visible := False;
    COM_Word.Documents.Open(OpenDialog1.FileName);
    Com_Word.ActiveDocument.Select;
    COM_Word.Selection.Copy;
    Memo2.PasteFromClipboard;
    COM_Word.DisplayAlerts := False;
    COM_Word.Quit;
    end;
  finally
    COM_Word := UnAssigned;
  end;

str:=Memo2.Lines.Text;
str_rub:=Copy(str,1,AnsiPos('[',str)-1);  //�������� ��� �� ����  (�������, �������, ������)

Delete(str,1,AnsiPos('[',str));  //������� ��� �� ����
Edit1.Text:=Copy(str,1,AnsiPos(']',str)-1);  //�������� ���

Delete(str,1,AnsiPos('[',str)); //������� ���
Memo1.Lines.Text:=Copy(str,1,AnsiPos(']',str)-1); //�������� ����

Delete(str,1,AnsiPos('[',str)); //������� ����
Edit2.Text:=Copy(str,1,AnsiPos(']',str)-1);  //�������� ����

fl:=0;
Repeat     //��������� ����� �� �������. ����� - ����� ������ � ���������
 begin
  ListBox1.Items.Add(Copy(str_rub,1,AnsiPos(',',str_rub)-1));
  Delete(str_rub,1,AnsiPos(',',str_rub));
  if AnsiPos(',',str_rub)=0 then 
      begin
      fl:=1;
      ListBox1.Items.Add(Copy(str_rub,1,AnsiPos('.',str_rub)-1));
      Delete(str_rub,1,AnsiPos('.',str_rub));
      end;
 end;
until fl=1;


AssignFile(sin_file,GetCurrentDir+'\Sinonims.dat'); //������������ � �����
for i:=0 to ListBox1.Count-1 do
begin
str_rub:=ListBox1.Items[i];
fl:=0;
Reset(sin_file);
Seek(sin_file,0);
 while not Eof(sin_file) do     //����� id �������� �� �����
    begin
      read(sin_file, sin_word);
      if sin_word.txt=str_rub then begin fl:=sin_word.parent;  break; end;
    end;

Reset(sin_file);
 while not Eof(sin_file) do    //����� ��������
    begin
      read(sin_file, sin_word);
      if sin_word.id=fl then begin ListBox1.Items[i]:=sin_word.txt;  break; end;
    end;
    
  
end;

CloseFile(sin_file);
//showmessage(str_rub+'='+sin_word.txt);

end;

procedure TForm1.Button4Click(Sender: TObject);
begin
Form2.Show;
end;

procedure TForm1.FormCreate(Sender: TObject);
var i:integer;
begin
//s:=GetCurrentDir;  //������������ �������� ��������
if FileExists('Sinonims.dat')=false then  //�������� ������� �����
  begin
    i:=FileCreate('Sinonims.dat');    //���� ���� �� �������
    FileClose(i);              //� ������� ���� ������ ������
  end;
end;

procedure TForm1.FormDestroy(Sender: TObject);
begin
//sldb.Free;
end;

procedure TForm1.ListBox1DblClick(Sender: TObject);
begin
//�� �������� ����� ������� ��������
Form2.Edit1.Text:=ListBox1.Items[ListBox1.ItemIndex];
Form2.Show;
end;

end.
