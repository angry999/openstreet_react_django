# Generated by Django 3.1.4 on 2021-03-01 21:24

from django.db import migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0053_auto_20210107_2142'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfoliostats',
            name='old_portfolio_constituents',
            field=jsonfield.fields.JSONField(null=True),
        ),
    ]