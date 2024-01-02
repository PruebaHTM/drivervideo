function px(addr)
{
  for (I=0;I<addr.length;I++)
    if (addr.charAt(I)=='z' && I+1<addr.length && addr.charAt(I+1)=='y')
      I++
    else
      document.write(addr.charAt(I));
}

function mx(addr,text)
{
  document.write("<a href=\"mailto:");
  px(addr);
  document.write("\">");
  px(text);
  document.write("<\a>");
  }