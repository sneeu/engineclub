
from django import forms

from apps.depot.models import Item


class ItemForm(forms.Form):
    
    url = forms.CharField(max_length=100)
    title = forms.CharField()
    description = forms.CharField(required=False)
    postcode = forms.CharField(required=False)
    area = forms.CharField(required=False)
    tags = forms.CharField(required=False)
    last_modified = forms.DateField(required=False)
    shelflife = forms.CharField(required=False)
    source = forms.CharField(required=False)
    status = forms.CharField(required=False)
    admin_note = forms.CharField(required=False)

    def clean_url(self):
        data = self.cleaned_data['url']
        if Item.objects(url=data).count() > 0:
            raise forms.ValidationError("There is already an item with this url")

        return data
        