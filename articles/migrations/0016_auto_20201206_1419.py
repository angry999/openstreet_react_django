# Generated by Django 3.1.4 on 2020-12-06 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0015_auto_20201206_1418'),
    ]

    operations = [
        migrations.AlterField(
            model_name='finalcsv',
            name='buy_value',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='sell_value',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='top10_buys',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='top10_inst',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='top10_sells',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='wealth_graph',
            field=models.JSONField(null=True),
        ),
    ]
